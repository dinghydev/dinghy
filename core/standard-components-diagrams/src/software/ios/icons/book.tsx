import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOK = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.book;',
  _width: 30,
  _height: 25.5,
}

export function Book(props: DiagramNodeProps) {
  return <Shape {...BOOK} {...props} _style={extendStyle(BOOK, props)} />
}
