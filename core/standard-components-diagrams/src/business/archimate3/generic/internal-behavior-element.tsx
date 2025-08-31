import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNAL_BEHAVIOR_ELEMENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=generic;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function InternalBehaviorElement(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNAL_BEHAVIOR_ELEMENT}
      {...props}
      _style={extendStyle(INTERNAL_BEHAVIOR_ELEMENT, props)}
    />
  )
}
