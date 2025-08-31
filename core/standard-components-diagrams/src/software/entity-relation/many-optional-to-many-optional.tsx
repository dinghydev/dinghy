import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANY_OPTIONAL_TO_MANY_OPTIONAL = {
  _style: {
    dependency:
      'edgeStyle=entityRelationEdgeStyle;fontSize=12;html=1;endArrow=ERzeroToMany;endFill=1;startArrow=ERzeroToMany;',
  },
}

export function ManyOptionalToManyOptional(props: DiagramNodeProps) {
  return (
    <Dependency
      {...MANY_OPTIONAL_TO_MANY_OPTIONAL}
      {...props}
      _style={extendStyle(MANY_OPTIONAL_TO_MANY_OPTIONAL, props)}
    />
  )
}
