export const quizzes = [
  {
    id: 'safety-quiz',
    title: 'Safety Quiz',
    description: 'Test your knowledge of safety procedures',
    category: 'Safety',
    questions: [
      {
        id: 1,
        question: 'What is the most important safety equipment when grinding metal?',
        type: 'multiple-choice',
        options: [
          'Safety glasses',
          'Hearing protection',
          'Respirator mask',
          'All of the above'
        ],
        correct: 3,
        explanation: 'All safety equipment is essential when grinding metal to protect against flying debris, noise, and harmful dust.'
      },
      {
        id: 2,
        question: 'True or False: You should work in a well-ventilated area when using body filler.',
        type: 'true-false',
        options: ['True', 'False'],
        correct: 0,
        explanation: 'Body filler contains chemicals that can be harmful if inhaled, so proper ventilation is essential.'
      },
      {
        id: 3,
        question: 'What should you do before starting any panel beating work?',
        type: 'multiple-choice',
        options: [
          'Put on safety equipment',
          'Inspect the damage',
          'Gather all necessary tools',
          'All of the above'
        ],
        correct: 3,
        explanation: 'Proper preparation including safety equipment, damage inspection, and tool gathering is essential before starting work.'
      },
      {
        id: 4,
        question: 'Match the tool to its primary safety concern:',
        type: 'matching',
        pairs: [
          { item: 'Angle Grinder', match: 'Flying debris and sparks' },
          { item: 'Paint Gun', match: 'Fume inhalation' },
          { item: 'Hammer', match: 'Impact injury' },
          { item: 'Body Filler', match: 'Chemical exposure' }
        ],
        explanation: 'Each tool has specific safety concerns that must be addressed with appropriate PPE.'
      }
    ]
  },
  {
    id: 'tools-quiz',
    title: 'Tools and Equipment Quiz',
    description: 'Test your knowledge of panel beating tools',
    category: 'Tools',
    questions: [
      {
        id: 1,
        question: 'What is a dolly used for?',
        type: 'multiple-choice',
        options: [
          'Cutting metal',
          'Supporting metal from behind while hammering',
          'Sanding surfaces',
          'Applying paint'
        ],
        correct: 1,
        explanation: 'A dolly is a metal block used to support the back of a panel while hammering from the front.'
      },
      {
        id: 2,
        question: 'Which tool is best for removing large amounts of body filler?',
        type: 'multiple-choice',
        options: [
          'Sandpaper',
          'File',
          'Angle grinder',
          'Hammer'
        ],
        correct: 1,
        explanation: 'A body file is specifically designed for quickly removing excess body filler.'
      },
      {
        id: 3,
        question: 'What grit sandpaper should you start with for rough shaping?',
        type: 'multiple-choice',
        options: [
          '600 grit',
          '320 grit',
          '180 grit',
          '80 grit'
        ],
        correct: 3,
        explanation: 'Coarse grits like 80-120 are used for initial rough shaping, then you progress to finer grits.'
      },
      {
        id: 4,
        question: 'True or False: You should use the same hammer for all types of panel work.',
        type: 'true-false',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'Different hammers are designed for different tasks - body hammers, shrinking hammers, and planishing hammers each have specific uses.'
      }
    ]
  },
  {
    id: 'techniques-quiz',
    title: 'Techniques Quiz',
    description: 'Test your knowledge of repair techniques',
    category: 'Techniques',
    questions: [
      {
        id: 1,
        question: 'When removing a dent, you should work from:',
        type: 'multiple-choice',
        options: [
          'Center to edges',
          'Edges to center',
          'Top to bottom',
          'Bottom to top'
        ],
        correct: 1,
        explanation: 'Working from the edges toward the center helps prevent over-stretching the metal.'
      },
      {
        id: 2,
        question: 'How many coats of primer should you typically apply?',
        type: 'multiple-choice',
        options: [
          '1 coat',
          '2-3 coats',
          '5-6 coats',
          'As many as possible'
        ],
        correct: 1,
        explanation: '2-3 thin, even coats of primer are typically sufficient for proper coverage and protection.'
      },
      {
        id: 3,
        question: 'Body filler should be applied in:',
        type: 'multiple-choice',
        options: [
          'One thick layer',
          'Multiple thin layers',
          'Only to deep dents',
          'Before sanding'
        ],
        correct: 1,
        explanation: 'Multiple thin layers allow for better control, proper curing, and reduce the risk of cracking.'
      },
      {
        id: 4,
        question: 'What is the purpose of a sealer coat?',
        type: 'multiple-choice',
        options: [
          'To fill scratches',
          'To protect primer and ensure paint adhesion',
          'To add color',
          'To remove rust'
        ],
        correct: 1,
        explanation: 'A sealer coat protects the primer and ensures proper adhesion of the base coat.'
      }
    ]
  },
  {
    id: 'troubleshooting-quiz',
    title: 'Troubleshooting Quiz',
    description: 'Test your problem-solving skills',
    category: 'Troubleshooting',
    questions: [
      {
        id: 1,
        question: 'If body filler cracks after application, what is the most likely cause?',
        type: 'multiple-choice',
        options: [
          'Applied too thick',
          'Not enough hardener',
          'Surface not properly prepared',
          'All of the above'
        ],
        correct: 3,
        explanation: 'Cracking can be caused by applying too thick, improper mixing, or poor surface preparation.'
      },
      {
        id: 2,
        question: 'Orange peel texture in paint is usually caused by:',
        type: 'multiple-choice',
        options: [
          'Too much paint',
          'Incorrect spray technique or gun settings',
          'Wrong color',
          'Old paint'
        ],
        correct: 1,
        explanation: 'Orange peel is typically caused by incorrect spray gun settings, distance, or technique.'
      },
      {
        id: 3,
        question: 'If paint doesn\'t match the original color, what should you check first?',
        type: 'multiple-choice',
        options: [
          'Paint brand',
          'Color code and mixing ratio',
          'Application method',
          'Primer color'
        ],
        correct: 1,
        explanation: 'Always verify the color code and ensure proper mixing ratio before application.'
      },
      {
        id: 4,
        question: 'True or False: Rust should be completely removed before applying any filler or primer.',
        type: 'true-false',
        options: ['True', 'False'],
        correct: 0,
        explanation: 'All rust must be completely removed and the area treated to prevent future rust formation.'
      }
    ]
  }
]

