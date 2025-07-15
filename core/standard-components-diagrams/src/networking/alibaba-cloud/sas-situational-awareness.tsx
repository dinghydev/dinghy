import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAS_SITUATIONAL_AWARENESS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.sas_situational_awareness;',
  _width: 46.5,
  _height: 49.199999999999996,
}

export function SasSituationalAwareness(props: DiagramNodeProps) {
  return <Shape {...SAS_SITUATIONAL_AWARENESS} {...props} />
}
