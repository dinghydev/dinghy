import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMPORT_EXPORT_JOBS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Import_Export_Jobs.svg;strokeColor=none;',
  },
  _width: 64,
  _height: 67,
}

export function ImportExportJobs(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMPORT_EXPORT_JOBS}
      {...props}
      _style={extendStyle(IMPORT_EXPORT_JOBS, props)}
    />
  )
}
