import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICES = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.devices;',
  _width: 113.3,
  _height: 50,
}

export function Devices(props: DiagramNodeProps) {
  return <Shape {...DEVICES} {...props} _style={extendStyle(DEVICES, props)} />
}
