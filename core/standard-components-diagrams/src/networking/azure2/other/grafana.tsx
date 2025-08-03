import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GRAFANA = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Grafana.svg;strokeColor=none;',
  _width: 68,
  _height: 52.800000000000004,
}

export function Grafana(props: DiagramNodeProps) {
  return <Shape {...GRAFANA} {...props} />
}
