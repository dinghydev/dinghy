import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COPY = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iCopy;fillColor=#000000;buttonText=;fontColor=#ffffff;spacingBottom=6;fontSize=9;fillColor2=#000000;fillColor3=#ffffff;align=center;sketch=0;whiteSpace=wrap;',
  },
  _original_width: 40,
  _original_height: 27.500000000000004,
}

export function Copy(props: DiagramNodeProps) {
  return <Shape {...COPY} {...props} _style={extendStyle(COPY, props)} />
}
