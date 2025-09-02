import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WI_FI_TAG = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.wi-fi_tag;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 74,
  _original_height: 64,
}

export function WiFiTag(props: DiagramNodeProps) {
  return (
    <Shape {...WI_FI_TAG} {...props} _style={extendStyle(WI_FI_TAG, props)} />
  )
}
