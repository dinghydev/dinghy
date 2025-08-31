import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPSTACK_VOLUME = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.appstack_volume;',
  },
  _width: 50,
  _height: 35,
}

export function AppstackVolume(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPSTACK_VOLUME}
      {...props}
      _style={extendStyle(APPSTACK_VOLUME, props)}
    />
  )
}
