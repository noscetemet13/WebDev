import { Component, OnInit } from '@angular/core';
import {Album} from "../models";
// import {ALBUMS} from "../albums-fake-db";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums!: Album[];
  loaded!: boolean;
  newAlbum: string;

  constructor(private albumsService: AlbumsService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumsService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

    // @ts-ignore
  sortAlbumAsc(albums){
    // @ts-ignore
    // console.log(albums.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.id > b.id) ? 1 : -1) : -1 ))
    this.albums = this.albums.sort((a, b) => (a.title > b.title) ? 1 : (a.title === b.title) ? ((a.id > b.id) ? 1 : -1) : -1 );
  }

  // @ts-ignore
  sortAlbumDesc(albums){
    // @ts-ignore
    this.albums = this.albums.sort((a, b) => (a.title < b.title) ? 1 : (a.title === b.title) ? ((a.id < b.id) ? 1 : -1) : -1 );
  }
  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
}
