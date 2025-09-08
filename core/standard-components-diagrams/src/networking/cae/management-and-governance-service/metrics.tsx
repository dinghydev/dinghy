import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const METRICS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Chart.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Metrics(props: DiagramNodeProps) {
  return <Shape {...METRICS} {...props} _style={extendStyle(METRICS, props)} />
}
