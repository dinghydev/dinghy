const STYLES = {
  'straight': {
    dependency: {
      style: {
        edgeStyle: 'straight',
      },
    },
  },
  'curved': {
    dependency: {
      style: {
        edgeStyle: 'orthogonalEdgeStyle',
        curved: 1,
      },
    },
  },
  'elbow': {
    dependency: {
      style: {
        edgeStyle: 'elbowEdgeStyle',
      },
    },
  },
  'elbow-vertical': {
    dependency: {
      style: {
        edgeStyle: 'elbowEdgeStyle',
        elbow: 'vertical',
      },
    },
  },
  'relation': {
    dependency: {
      style: {
        edgeStyle: 'entityRelationEdgeStyle',
      },
    },
  },
}
export const _wayPoint = (style: string) => STYLES[style as keyof typeof STYLES]
