import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GA_GLOBAL_ACCELERATOR = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ga_global_accelerator;',
  _width: 60,
  _height: 60,
}

export function GaGlobalAccelerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...GA_GLOBAL_ACCELERATOR}
      {...props}
      _style={extendStyle(GA_GLOBAL_ACCELERATOR, props)}
    />
  )
}
