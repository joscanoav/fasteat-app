import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, ChartModule, ToastModule], // Importa ChartModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  stats = {
    totalOrders: 120,
    revenue: 15000,
    totalClients: 85
  };

  // Datos para el gráfico de barras
  chartData: any;
  chartOptions: any;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.setupChart();
  }

  // Configura el gráfico de barras
  setupChart() {
    this.chartData = {
      labels: ['Pedidos', 'Ingresos', 'Clientes'],
      datasets: [
        {
          label: 'Estadísticas',
          data: [this.stats.totalOrders, this.stats.revenue, this.stats.totalClients],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    };
  }
}
