import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPY_AREA = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.ios.iCopy;fillColor=#000000;buttonText=;fontColor=#ffffff;spacingBottom=6;fontSize=9;fillColor2=#000000;fillColor3=#ffffff;align=center;sketch=0;whiteSpace=wrap;',
  _width: 0,
  _height: 80,
}

export function CopyArea(props: DiagramNodeProps) {
  return (
    <Shape {...COPY_AREA} {...props} _style={extendStyle(COPY_AREA, props)} />
  )
}
