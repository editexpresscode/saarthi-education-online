import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

const InstantHelpContext = createContext()

const STORAGE_KEY = 'saarthi_instant_help_request'

function getSavedRequest() {
  try {
    const savedRequest = localStorage.getItem(STORAGE_KEY)

    if (!savedRequest) {
      return null
    }

    return JSON.parse(savedRequest)
  } catch (error) {
    console.error('Failed to read saved request:', error)
    return null
  }
}

export function InstantHelpProvider({ children }) {
  const [request, setRequest] = useState(getSavedRequest)

  // Save request in localStorage
  useEffect(() => {
    if (request) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(request)
      )
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [request])

  // Sync between browser tabs
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key !== STORAGE_KEY) {
        return
      }

      if (event.newValue) {
        try {
          setRequest(JSON.parse(event.newValue))
        } catch (error) {
          console.error(
            'Failed to sync request:',
            error
          )
        }
      } else {
        setRequest(null)
      }
    }

    window.addEventListener(
      'storage',
      handleStorageChange
    )

    return () => {
      window.removeEventListener(
        'storage',
        handleStorageChange
      )
    }
  }, [])

  // Student creates request
  const createRequest = ({
    studentClass,
    subject,
    topic,
    teacher
  }) => {
    const newRequest = {
      id: Date.now(),
      studentClass,
      subject,
      topic,
      teacher,
      status: 'pending',
      createdAt: new Date().toISOString()
    }

    setRequest(newRequest)
  }

  // Teacher accepts
  const acceptRequest = () => {
    setRequest((current) => {
      if (!current) {
        return null
      }

      return {
        ...current,
        status: 'accepted',
        acceptedAt: new Date().toISOString()
      }
    })
  }

  // Teacher declines
  const declineRequest = () => {
    setRequest((current) => {
      if (!current) {
        return null
      }

      return {
        ...current,
        status: 'declined',
        declinedAt: new Date().toISOString()
      }
    })
  }

  // Student cancels pending request
  const cancelRequest = () => {
    setRequest((current) => {
      if (!current) {
        return null
      }

      return {
        ...current,
        status: 'cancelled',
        cancelledAt: new Date().toISOString()
      }
    })
  }

  // Teacher ends active session
  const endSession = () => {
    setRequest((current) => {
      if (!current) {
        return null
      }

      return {
        ...current,
        status: 'ended',
        endedAt: new Date().toISOString()
      }
    })
  }

  // Clear old request completely
  const clearRequest = () => {
    setRequest(null)
  }

  return (
    <InstantHelpContext.Provider
      value={{
        request,
        createRequest,
        acceptRequest,
        declineRequest,
        cancelRequest,
        endSession,
        clearRequest
      }}
    >
      {children}
    </InstantHelpContext.Provider>
  )
}

export function useInstantHelp() {
  const context = useContext(InstantHelpContext)

  if (!context) {
    throw new Error(
      'useInstantHelp must be used inside InstantHelpProvider'
    )
  }

  return context
}