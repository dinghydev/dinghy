import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAIR_SITES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.pair_sites;',
  _width: 50,
  _height: 27,
}

export function PairSites(props: DiagramNodeProps) {
  return (
    <Shape {...PAIR_SITES} {...props} _style={extendStyle(PAIR_SITES, props)} />
  )
}
