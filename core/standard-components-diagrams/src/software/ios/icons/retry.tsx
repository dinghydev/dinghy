import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RETRY = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.retry;',
  },
  _width: 27.599999999999998,
  _height: 14.399999999999999,
}

export function Retry(props: DiagramNodeProps) {
  return <Shape {...RETRY} {...props} _style={extendStyle(RETRY, props)} />
}
