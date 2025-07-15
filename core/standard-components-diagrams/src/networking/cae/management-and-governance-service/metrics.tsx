import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const METRICS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Chart.svg;',
  _width: 50,
  _height: 48,
}

export function Metrics(props: DiagramNodeProps) {
  return <Shape {...METRICS} {...props} />
}
