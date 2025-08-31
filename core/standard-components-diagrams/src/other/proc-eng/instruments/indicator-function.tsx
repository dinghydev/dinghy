import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INDICATOR_FUNCTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;shape=mxgraph.pid2inst.indicator;mounting=room;overflow=fill;indType=func',
  },
  _width: 50,
  _height: 100,
}

export function IndicatorFunction(props: DiagramNodeProps) {
  return (
    <Shape
      {...INDICATOR_FUNCTION}
      {...props}
      _style={extendStyle(INDICATOR_FUNCTION, props)}
    />
  )
}
