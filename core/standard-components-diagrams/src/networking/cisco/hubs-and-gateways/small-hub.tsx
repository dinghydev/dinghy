import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SMALL_HUB = {
  _style: {
    entity:
      'shape=mxgraph.cisco.hubs_and_gateways.small_hub;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 90,
  _original_height: 45,
}

export function SmallHub(props: DiagramNodeProps) {
  return (
    <Shape {...SMALL_HUB} {...props} _style={extendStyle(SMALL_HUB, props)} />
  )
}
