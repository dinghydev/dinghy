import { Dependency, extendStyle } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const METAMODEL_REFERENCE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=top;',
  },
}

export function MetamodelReference(props: NodeProps) {
  return (
    <Dependency
      {...METAMODEL_REFERENCE}
      {...props}
      _style={extendStyle(METAMODEL_REFERENCE, props)}
    />
  )
}
