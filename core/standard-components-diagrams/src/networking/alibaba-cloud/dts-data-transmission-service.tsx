import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DTS_DATA_TRANSMISSION_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dts_data_transmission_service;',
  _width: 48,
  _height: 47.400000000000006,
}

export function DtsDataTransmissionService(props: DiagramNodeProps) {
  return <Shape {...DTS_DATA_TRANSMISSION_SERVICE} {...props} />
}
