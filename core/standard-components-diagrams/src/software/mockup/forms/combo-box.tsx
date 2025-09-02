import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMBO_BOX = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.comboBox;strokeColor=#999999;fillColor=#ddeeff;align=left;fillColor2=#aaddff;mainText=;fontColor=#666666;fontSize=17;spacingLeft=3;',
  },
  _original_width: 150,
  _original_height: 30,
}

export function ComboBox(props: DiagramNodeProps) {
  return (
    <Shape {...COMBO_BOX} {...props} _style={extendStyle(COMBO_BOX, props)} />
  )
}
