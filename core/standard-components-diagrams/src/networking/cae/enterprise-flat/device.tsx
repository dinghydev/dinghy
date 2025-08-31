import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.device',
  },
  _width: 50,
  _height: 26,
}

export function Device(props: DiagramNodeProps) {
  return <Shape {...DEVICE} {...props} _style={extendStyle(DEVICE, props)} />
}
