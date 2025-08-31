import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_SIZE = {
  _style:
    'html=1;strokeWidth=1;shadow=0;dashed=0;shape=mxgraph.ios7.misc.text_size;fillColor=#007AFF;strokeColor=none;buttonText=;strokeColor2=#222222;fontColor=#222222;fontSize=8;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 15,
  _height: 15,
}

export function TextSize(props: DiagramNodeProps) {
  return (
    <Shape {...TEXT_SIZE} {...props} _style={extendStyle(TEXT_SIZE, props)} />
  )
}
