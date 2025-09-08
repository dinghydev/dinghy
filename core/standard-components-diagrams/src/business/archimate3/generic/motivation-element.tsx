import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOTIVATION_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=oct;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function MotivationElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOTIVATION_ELEMENT}
      {...props}
      _style={extendStyle(MOTIVATION_ELEMENT, props)}
    />
  )
}
