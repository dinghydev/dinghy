import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GPS = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.gps;strokeColor=#737373;fillColor=#737373;shadow=0;strokeWidth=2;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Gps(props: DiagramNodeProps) {
  return <Shape {...GPS} {...props} _style={extendStyle(GPS, props)} />
}
