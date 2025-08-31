import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAPABILITY = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#F5DEAA;shape=mxgraph.archimate3.application;appType=capability;archiType=rounded;',
  _width: 150,
  _height: 75,
}

export function Capability(props: DiagramNodeProps) {
  return (
    <Shape {...CAPABILITY} {...props} _style={extendStyle(CAPABILITY, props)} />
  )
}
