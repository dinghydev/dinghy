import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEROKU_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.heroku2;',
  _width: 60,
  _height: 60,
}

export function Heroku2(props: DiagramNodeProps) {
  return <Shape {...HEROKU_2} {...props} />
}
