import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ZONES = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.zones;',
  },
  _original_width: 50,
  _original_height: 44.47,
}

export function Zones(props: DiagramNodeProps) {
  return <Shape {...ZONES} {...props} _style={extendStyle(ZONES, props)} />
}
