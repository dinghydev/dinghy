import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PLUGIN_RELAY_2 = {
  _style:
    'verticalLabelPosition=bottom;dashed=0;shadow=0;html=1;align=center;verticalAlign=top;shape=mxgraph.cabinets.plugin_relay_2;',
  _width: 12,
  _height: 40,
}

export function PluginRelay2(props: DiagramNodeProps) {
  return <Shape {...PLUGIN_RELAY_2} {...props} />
}
