import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLUGIN_RELAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.plugin_relay_1;',
  },
  _width: 3,
  _height: 40,
}

export function PluginRelay(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLUGIN_RELAY)} />
}
