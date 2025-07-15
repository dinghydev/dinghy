import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PODIO = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.podio;fillColor=#72B8DE;gradientColor=#186BA2;gradientDirection=south;',
  _width: 37,
  _height: 37,
}

export function Podio(props: DiagramNodeProps) {
  return <Shape {...PODIO} {...props} />
}
