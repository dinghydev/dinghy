import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANY_MANDATORY_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERoneToMany;',
  },
}

export function ManyMandatoryToManyMandatory(props: DiagramNodeProps) {
  return <Dependency {...MANY_MANDATORY_TO_MANY_MANDATORY} {...props} />
}
