import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON = {
  _style: {
    entity:
      'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7ui.icon;fontSize=8;fontColor=#ffffff;buttonText=;whiteSpace=wrap;align=center;',
  },
  _width: 40,
  _height: 36,
}

export function Icon(props: NodeProps) {
  return <Shape {...ICON} {...props} _style={extendStyle(ICON, props)} />
}
