import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const METAMODEL_REFERENCE = {
  _style:
    'edgeStyle=none;html=1;endArrow=open;endSize=12;dashed=1;verticalAlign=top;',
  _width: 160,
  _height: 0,
}

export function MetamodelReference(props: DiagramNodeProps) {
  return <Dependency {...METAMODEL_REFERENCE} {...props} />
}
