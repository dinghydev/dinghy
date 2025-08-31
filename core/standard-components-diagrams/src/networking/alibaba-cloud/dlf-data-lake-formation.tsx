import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DLF_DATA_LAKE_FORMATION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.dlf_data_lake_formation;',
  _width: 53.4,
  _height: 50.099999999999994,
}

export function DlfDataLakeFormation(props: DiagramNodeProps) {
  return (
    <Shape
      {...DLF_DATA_LAKE_FORMATION}
      {...props}
      _style={extendStyle(DLF_DATA_LAKE_FORMATION, props)}
    />
  )
}
