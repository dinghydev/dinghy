import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPARK_DATA_INSIGHTS = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.spark_data_insights;',
  _width: 46.2,
  _height: 50.099999999999994,
}

export function SparkDataInsights(props: DiagramNodeProps) {
  return <Shape {...SPARK_DATA_INSIGHTS} {...props} />
}
