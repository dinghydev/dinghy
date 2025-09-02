import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPTIONS = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.options;pointerEvents=1',
  },
  _original_width: 30,
  _original_height: 15,
}

export function Options(props: DiagramNodeProps) {
  return <Shape {...OPTIONS} {...props} _style={extendStyle(OPTIONS, props)} />
}
