import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const METAMODEL_REFERENCE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=top;',
  },
}

export function MetamodelReference(props: DiagramNodeProps) {
  return (
    <Dependency
      {...METAMODEL_REFERENCE}
      {...props}
      _style={extendStyle(METAMODEL_REFERENCE, props)}
    />
  )
}
