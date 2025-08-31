import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SILENT = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.silent;',
  _width: 30,
  _height: 30,
}

export function Silent(props: DiagramNodeProps) {
  return <Shape {...SILENT} {...props} _style={extendStyle(SILENT, props)} />
}
