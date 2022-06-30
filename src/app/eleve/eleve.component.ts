import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EleveDataSource, EleveItem } from './eleve-datasource';

@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss']
})
export class EleveComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EleveItem>;
  dataSource: EleveDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name',];
  tasks: any;
  taskTitle: any;
  taskStatus: any;

  constructor() {
    this.dataSource = new EleveDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex(() => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  addTask() {
    const lastIndex = this.tasks.length - 1;
    const id = this.tasks[lastIndex].id + 1;
    this.tasks.push({ title: this.taskTitle,  id, status: this.taskStatus });
    this.taskTitle = "";
  }
}
