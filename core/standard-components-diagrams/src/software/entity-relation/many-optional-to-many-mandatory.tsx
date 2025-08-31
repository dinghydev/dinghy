import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANY_OPTIONAL_TO_MANY_MANDATORY = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERoneToMany;startArrow=ERzeroToMany;',
  },
}

export function ManyOptionalToManyMandatory(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MANY_OPTIONAL_TO_MANY_MANDATORY}
      {...props}
      _style={extendStyle(MANY_OPTIONAL_TO_MANY_MANDATORY, props)}
    />
  )
}
