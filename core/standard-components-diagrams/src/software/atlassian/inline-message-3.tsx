import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_MESSAGE_3 = {
  _style: {
    entity:
      'shape=mxgraph.azure.azure_alert;fillColor=#FF8B00;strokeColor=none;fontColor=#172B4C;labelPosition=right;verticalLabelPosition=middle;align=left;verticalAlign=middle;html=1;spacingLeft=5;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 6,
  _original_height: 180,
}

export function InlineMessage3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_MESSAGE_3}
      {...props}
      _style={extendStyle(INLINE_MESSAGE_3, props)}
    />
  )
}
