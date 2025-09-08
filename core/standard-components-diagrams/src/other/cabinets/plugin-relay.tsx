import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLUGIN_RELAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.plugin_relay_1;',
  },
  _original_width: 3,
  _original_height: 40,
}

export function PluginRelay(props: DiagramNodeProps) {
  return (
    <Shape
      {...PLUGIN_RELAY}
      {...props}
      _style={extendStyle(PLUGIN_RELAY, props)}
    />
  )
}
