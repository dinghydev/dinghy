import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THIN_FILM_EVAPORATOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.thin-film_evaporator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 120,
}

export function ThinFilmEvaporator(props: DiagramNodeProps) {
  return (
    <Shape
      {...THIN_FILM_EVAPORATOR}
      {...props}
      _style={extendStyle(THIN_FILM_EVAPORATOR, props)}
    />
  )
}
