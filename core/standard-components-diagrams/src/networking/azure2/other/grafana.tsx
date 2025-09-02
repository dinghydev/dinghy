import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRAFANA = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Grafana.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 52.800000000000004,
}

export function Grafana(props: DiagramNodeProps) {
  return <Shape {...GRAFANA} {...props} _style={extendStyle(GRAFANA, props)} />
}
