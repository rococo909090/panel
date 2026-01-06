export const tutorials = [
  {
    id: 'intro',
    title: 'Introduction to Panel Beating',
    description: 'Learn the fundamentals of automotive panel beating',
    category: 'Basics',
    steps: [
      {
        id: 1,
        title: 'What is Panel Beating?',
        content: 'Panel beating is the process of repairing damaged vehicle body panels to restore them to their original shape and condition.',
        interactive: {
          type: 'reveal',
          items: [
            { label: 'Dent Removal', description: 'Removing dents and dings from metal panels' },
            { label: 'Rust Repair', description: 'Treating and repairing rust-damaged areas' },
            { label: 'Paint Matching', description: 'Matching and applying paint to match original finish' }
          ]
        }
      },
      {
        id: 2,
        title: 'Safety First',
        content: 'Always wear appropriate safety equipment when performing panel beating work.',
        interactive: {
          type: 'checklist',
          items: [
            'Safety glasses',
            'Gloves',
            'Respirator mask',
            'Protective clothing',
            'Well-ventilated workspace'
          ]
        }
      },
      {
        id: 3,
        title: 'Workspace Setup',
        content: 'Set up a clean, well-lit workspace with adequate ventilation and proper tools organized within reach.',
        interactive: {
          type: 'tool-selector',
          tools: ['Hammer', 'Dolly', 'Body filler', 'Sanding blocks', 'Primer']
        }
      }
    ]
  },
  {
    id: 'tools',
    title: 'Tools and Equipment',
    description: 'Essential tools for panel beating work',
    category: 'Basics',
    steps: [
      {
        id: 1,
        title: 'Basic Hand Tools',
        content: 'Essential hand tools include hammers, dollies, body files, and sanding blocks.',
        interactive: {
          type: 'tool-matching',
          pairs: [
            { tool: 'Body Hammer', use: 'Shaping metal panels' },
            { tool: 'Dolly', use: 'Supporting metal from behind' },
            { tool: 'Body Filler', use: 'Filling small imperfections' },
            { tool: 'Sanding Block', use: 'Smoothing surfaces' }
          ]
        }
      },
      {
        id: 2,
        title: 'Power Tools',
        content: 'Power tools can speed up the repair process significantly.',
        interactive: {
          type: 'reveal',
          items: [
            { label: 'Angle Grinder', description: 'For cutting and grinding metal' },
            { label: 'Orbital Sander', description: 'For smooth sanding of large areas' },
            { label: 'Paint Gun', description: 'For applying primer and paint' }
          ]
        }
      }
    ]
  },
  {
    id: 'damage-assessment',
    title: 'Damage Assessment',
    description: 'How to properly assess vehicle damage',
    category: 'Techniques',
    steps: [
      {
        id: 1,
        title: 'Visual Inspection',
        content: 'Start with a thorough visual inspection of the damaged area. Look for dents, scratches, rust, and paint damage.',
        interactive: {
          type: 'diagram',
          areas: [
            { name: 'Front Fender', damage: 'Dent', severity: 'Medium' },
            { name: 'Door Panel', damage: 'Scratch', severity: 'Light' },
            { name: 'Rear Quarter', damage: 'Rust', severity: 'Heavy' }
          ]
        }
      },
      {
        id: 2,
        title: 'Measuring Damage',
        content: 'Measure the extent of damage to determine repair approach and estimate costs.',
        interactive: {
          type: 'calculator',
          fields: ['Length (cm)', 'Width (cm)', 'Depth (cm)']
        }
      }
    ]
  },
  {
    id: 'dent-removal',
    title: 'Dent Removal Techniques',
    description: 'Various methods for removing dents from panels',
    category: 'Techniques',
    steps: [
      {
        id: 1,
        title: 'Hammer and Dolly Method',
        content: 'Use a body hammer and dolly to gradually work out dents from the inside and outside of the panel.',
        interactive: {
          type: 'step-by-step',
          steps: [
            'Position dolly behind dent',
            'Tap gently with hammer from outside',
            'Work from edges toward center',
            'Check progress frequently'
          ]
        }
      },
      {
        id: 2,
        title: 'Paintless Dent Removal',
        content: 'For small dents, use specialized tools to push or pull the dent without damaging paint.',
        interactive: {
          type: 'reveal',
          items: [
            { label: 'Glue Pulling', description: 'Using hot glue and pull tabs' },
            { label: 'Rod Access', description: 'Using rods to push from behind' }
          ]
        }
      }
    ]
  },
  {
    id: 'filling-sanding',
    title: 'Filling and Sanding',
    description: 'Proper techniques for filling and sanding',
    category: 'Techniques',
    steps: [
      {
        id: 1,
        title: 'Applying Body Filler',
        content: 'Apply body filler to smooth out remaining imperfections after metal work.',
        interactive: {
          type: 'checklist',
          items: [
            'Clean surface thoroughly',
            'Mix filler according to instructions',
            'Apply in thin layers',
            'Allow proper curing time',
            'Sand between layers'
          ]
        }
      },
      {
        id: 2,
        title: 'Sanding Techniques',
        content: 'Use progressive grits of sandpaper to achieve smooth finish.',
        interactive: {
          type: 'step-by-step',
          steps: [
            'Start with 80-120 grit for rough shaping',
            'Progress to 180-220 grit',
            'Finish with 320-400 grit',
            'Final sand with 600+ grit for primer'
          ]
        }
      }
    ]
  },
  {
    id: 'priming-painting',
    title: 'Priming and Painting',
    description: 'Final steps for a professional finish',
    category: 'Techniques',
    steps: [
      {
        id: 1,
        title: 'Priming',
        content: 'Apply primer to protect metal and provide smooth base for paint.',
        interactive: {
          type: 'checklist',
          items: [
            'Clean and degrease surface',
            'Apply primer in thin, even coats',
            'Allow proper flash time',
            'Sand primer smooth',
            'Apply sealer if needed'
          ]
        }
      },
      {
        id: 2,
        title: 'Paint Application',
        content: 'Apply base coat and clear coat for professional finish.',
        interactive: {
          type: 'step-by-step',
          steps: [
            'Mix paint to match color',
            'Apply base coat in even passes',
            'Allow flash time',
            'Apply clear coat',
            'Polish after curing'
          ]
        }
      }
    ]
  },
  {
    id: 'safety',
    title: 'Safety Procedures',
    description: 'Essential safety practices for panel beating',
    category: 'Safety',
    steps: [
      {
        id: 1,
        title: 'Personal Protective Equipment',
        content: 'Always wear appropriate PPE when working on vehicles.',
        interactive: {
          type: 'checklist',
          items: [
            'Safety glasses or face shield',
            'Hearing protection',
            'Respirator for dust and fumes',
            'Protective gloves',
            'Steel-toed boots',
            'Long sleeves and pants'
          ]
        }
      },
      {
        id: 2,
        title: 'Workspace Safety',
        content: 'Maintain a safe working environment.',
        interactive: {
          type: 'checklist',
          items: [
            'Adequate ventilation',
            'Fire extinguisher nearby',
            'Proper lighting',
            'Clean, organized workspace',
            'No smoking or open flames',
            'Proper waste disposal'
          ]
        }
      }
    ]
  }
]

