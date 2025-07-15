import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEROKU = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.heroku;',
  _width: 60,
  _height: 60,
}

export function Heroku(props: DiagramNodeProps) {
  return <Shape {...HEROKU} {...props} />
}
