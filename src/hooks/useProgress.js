import useLocalStorage from './useLocalStorage'

function useProgress() {
  const [progress, setProgress] = useLocalStorage('learning-progress', {
    completedTutorials: [],
    completedQuizzes: [],
    completedInteractive: [],
    achievements: [],
    totalScore: 0
  })

  const markTutorialComplete = (tutorialId) => {
    setProgress(prev => ({
      ...prev,
      completedTutorials: [...new Set([...prev.completedTutorials, tutorialId])]
    }))
  }

  const markQuizComplete = (quizId, score) => {
    setProgress(prev => ({
      ...prev,
      completedQuizzes: [...new Set([...prev.completedQuizzes, quizId])],
      totalScore: prev.totalScore + score
    }))
  }

  const markInteractiveComplete = (interactiveId) => {
    setProgress(prev => ({
      ...prev,
      completedInteractive: [...new Set([...prev.completedInteractive, interactiveId])]
    }))
  }

  const addAchievement = (achievement) => {
    setProgress(prev => ({
      ...prev,
      achievements: [...new Set([...prev.achievements, achievement])]
    }))
  }

  const isTutorialComplete = (tutorialId) => {
    return progress.completedTutorials.includes(tutorialId)
  }

  const isQuizComplete = (quizId) => {
    return progress.completedQuizzes.includes(quizId)
  }

  const isInteractiveComplete = (interactiveId) => {
    return progress.completedInteractive.includes(interactiveId)
  }

  return {
    progress,
    markTutorialComplete,
    markQuizComplete,
    markInteractiveComplete,
    addAchievement,
    isTutorialComplete,
    isQuizComplete,
    isInteractiveComplete
  }
}

export default useProgress

