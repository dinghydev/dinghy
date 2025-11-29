import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THIN_FILM_EVAPORATOR = {
  _style: {
    entity:
      'shape=mxgraph.pid.heat_exchangers.thin-film_evaporator;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 80,
  _height: 120,
}

export function ThinFilmEvaporator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THIN_FILM_EVAPORATOR)} />
}
